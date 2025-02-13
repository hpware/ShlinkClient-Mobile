import checkStatus from "@/components/api/checkStatus"
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";


export default function status() {
    const [ chk, setchk ] = useState<any>();
    const [ host, sethost ] = useState<string>("");
    const [ error, seterror ] = useState<string>();
    // Fuck react
    // Really? this is really fucked up, still fucking not allowing the chk.passed? even tho data is never even passed there? well, time to change checkStatus.ts to incorperate this stupid logic.
    const [ errorb, seterrorb ] = useState<boolean>(false);
    const [ loading, setloading ] = useState<boolean>(false);
    useEffect(() => {
        sethost("https://yhw.tw");
        seterror("");
        seterrorb(true);
        setchk(null);
        try {
        const getdata = async () => {
            setloading(true);
            const res = await checkStatus(host);
            if (res.error || res.version === "v0") {
                seterrorb(true);
                console.log(res.error);
                seterror(res.error);
            } else {
                await setchk(res);
                console.log(res);
            }
        }
        getdata();
    } catch (e) {
        seterrorb(true);
        seterror(e.message);
    } finally {
        setloading(false);
    }
    }, [])
    return (
        <View style={s.main}>
\            <Text style={s.hostname}>{host.replace("https://", "").replace("http://", "")}</Text>
            {loading ? ( 
                <Text>檢查伺服器狀態中...</Text>
            ) : errorb === true ? (
            <View>
                <Text>{error}</Text>
            </View>
            // I thought else just is just else. it will check else first???? what the hell
            ) :chk &&  (
            <View>
                {chk.passed && <Text>Passed</Text>}
                {chk.version && <Text>版本：{chk.version}</Text>}
            </View>
        )
            }
        </View>
    )
}


const s = StyleSheet.create({
    main: {
        alignItems: "center",
        textAlign: "center"
    },
    hostname : {
        paddingTop: 10,
        fontSize: 30,
    }
})