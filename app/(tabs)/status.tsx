import checkStatus from "@/components/api/checkStatus"
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";


export default function status() {
    const [ chk, setchk ] = useState<any>();
    const [ host, sethost ] = useState<string>("");
    const [ error, seterror ] = useState<string>();
    useEffect(() => {
        sethost("https://yhw.tw")
        checkStatus(host)
        .then(res => {
            setchk(res);
            console.log(chk)
            if (chk.error !== null) {
                seterror(error)
            }
        }).catch(e => {
            seterror(e);
        })
    }, [])
    return (
        <View style={s.main}>
            <Text>{JSON.stringify(chk)}</Text>
            {error && 
            <View>
                <Text style={s.hostname}>{host.replace("https://", "").replace("http://", "")}</Text>
                <Text>{error}</Text>
            </View>
            }
            {!error && 
            <View>
                <Text style={s.hostname}>{host.replace("https://", "").replace("http://", "")}</Text>
                {chk.passed && <Text>Passed</Text>}
                {chk.version && <Text>版本：{chk.version}</Text>}
                </View>
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