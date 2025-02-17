// Alert: Swear words exists in this file.

import checkStatus from "@/components/api/checkStatus";
import createShortLink from "@/components/api/createShortLink";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { storeData, getData } from "@/components/data";

export default function status() {
  const [chk, setchk] = useState<any>();
  const [host, sethost] = useState<string>("");
  const [error, seterror] = useState<string>();
  // Really? this is really fucked up, still fucking not allowing the chk.passed? even tho data is never even passed there? well, time to change checkStatus.ts to incorperate this stupid logic.
  const [errorb, seterrorb] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);

  // Do you really need TWO useEffects ??? (I used three.)
  useEffect(() => {
    sethost("https://yhw.tw");
    seterror("");
    seterrorb(true);
    setloading(true);
    // yes
  }, []);

  useEffect(() => {
    const getdata = async (host: string) => {
      try {
        const res = await checkStatus(host);
        if (res.error || res.version === "v0") { 
          seterrorb(true);
          setchk(null);
          console.log(res.error);
          seterror(res.error);
          setloading(false);
          return;
        } else {
          await setchk(res);
          console.log(res);
          storeData("version", chk.version);
        }
      } catch (e) {
        seterrorb(true);
        seterror(e.message);
      } finally {
        setloading(false);
        console.log("truck");
      }
    };
    // I put this in the function. huge bruh moment.
    getdata(host);
  }, []);

  useEffect(() => {
    const createSL = async (
      host: string,
      url: string,
      length: number | 5,
      slug: string | "",
      chk: any,
    ) => {
      try {
        if (!chk) {
          const res = await createShortLink(host, url, length, slug);
        }
      } catch (e) {}
    };
  }, []);
  return (
    <View style={s.main}>
      <Text style={s.hostname}>
        {host.replace("https://", "").replace("http://", "")}
      </Text>
      {errorb === true && (
        <View>
          <Text>{error}</Text>
        </View>
      )}
      {
        // I thought else just is just else. it will check else first???? what the hell
        chk && (
          <View>
            {chk.passed && <Text>Passed</Text>}
            {chk.version && <Text>版本：{chk.version}</Text>}
          </View>
        )
      }
    </View>
  );
}

const s = StyleSheet.create({
  main: {
    alignItems: "center",
    textAlign: "center",
  },
  hostname: {
    paddingTop: 10,
    fontSize: 30,
  },
});
