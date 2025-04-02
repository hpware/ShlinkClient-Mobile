interface hcres {
    status: string;
    version: string;
  }
  
  interface returnres {
    version: any;
  }
  
  export default async function checkStatus(host: string): Promise<returnres> {
    try {
      const url = host + "/rest/health";
      const req = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      console.log(url);
      const res = await req.json();
      console.log(req);
      console.log(res);
      if ((res.status = "pass")) {
        return {
          version: res.version,
        };
      } else {
        console.log("else");
        return {
          version: "v0",
        };
      }
    } catch (e) {
      console.log(e);
      return {
        version: "v0",
      };
    }
  }
  
  export interface resdata {
    passed: boolean;
    error: any;
    // DONT SPELL THE VERSION WRONG!!!
    version: any;
  }
  