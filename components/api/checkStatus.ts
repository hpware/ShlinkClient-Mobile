export async function checkStatus(host: string) {
    const req = await fetch(`${host}/rest/health`);
    const res = await req.json();
    if (res.status = "pass") {
        const verison = res.verison;
        return {
            passed: true,
            verison: verison,
        }
    } else {
        return {
            passed: false,
            verison: null,
        }
    }

}