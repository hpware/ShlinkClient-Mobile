interface hcres {
    status: string;
    verison: string;
}

interface returnres {
    passed: boolean,
    error: any,
    verison: string | null, 
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
        console.log(res.verison)
        return {
            passed: true,
            error: null,
            verison: res.verison,
        }
    } else {
        console.log("else")
        return {
            passed: false,
            error: null,
            verison: null,
        }
    }
} catch (e) {
    console.log(e);
    return {
        passed: false,
        error: e,
        verison: null,
    }
}
}