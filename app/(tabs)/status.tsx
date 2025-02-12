import checkStatus from "@/components/api/checkStatus"
import { useEffect, useState } from "react";
import { View, Text } from "react-native";


export default function status() {
    const [ chk, setchk ] = useState<string>();
    const [ host, sethost ] = useState<string>("");
    const [ error, seterror ] = useState<string>();
    const [ pbreq, setpbreq ] = useState<string>();
    useEffect(() => {
        sethost("https://yhw.tw")
        checkStatus(host)
        .then(res => {
            setchk(JSON.stringify(res));
            setpbreq(JSON.stringify(res.error))
        }).catch(e => {
            setpbreq(e.message);
        })
    }, [])
    return (
        <View>
            <Text>{host}</Text>
            <Text>{chk}</Text>
            <Text>{pbreq}</Text>
        </View>
    )
}