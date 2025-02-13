interface hcres {
    status: string;
    version: string;
}

interface returnres {
    passed: boolean,
    error: any,
    // DONT SPELL THE VERSION WRONG!!!
    version: any, 
}

export default async function checkStatus(host: string): Promise<returnres> {
    try {
    const url = host + "/rest/health";
    const req = await fetch(url, {
        method: "GET",
        headers :{
            "Accept": "application/json",
        }
    });
    console.log(url);
    const res = await req.json() as hcres;
    console.log(res);
    if (res.status = "pass") {
        return {
            passed: true,
            error: null,
            version: res.version,
        }
    } else {
        console.log("else")
        return {
            passed: false,
            error: "Not Passed",
            version: null,
        }
    }
} catch (e) {
    console.log(e);
    return {
        passed: false,
        error: e,
        version: null,
    }
}
}

export interface resdata {
    passed: boolean,
    error: any,
    // DONT SPELL THE VERSION WRONG!!!
    version: any, 
}