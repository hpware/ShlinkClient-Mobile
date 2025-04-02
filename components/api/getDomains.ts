import { getData } from "@/components/data";
export default async function getDomains(host: string) {
    try {
        const version = getData("version");
        const fetchURL  = `/rest/v${version}/domains`
        const req = await fetch(fetchURL)
    } catch (e) {
        console.log(e);
        return {

        }
    }
}