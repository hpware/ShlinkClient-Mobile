import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as sql from 'expo-sqlite';


export default function startPage() {
    // Values
    const [step, setstep] = useState<number | null>(null);
    // sql Commands
    const createChecck = `
    create table checks (
        check varchar(255) not null,
        primay key(check);
    )
    `
    const createDomainList = `
    create table domains (
        domain varchar(255) not null,
        token varchar(255) not null,
        primary key (domain)
    )
    `
    // Page
    return (
    <View>
        {
            step == 1 ?
            <View>
            
            </View> : 
            <View>
            
            </View>
        }
    </View>
    )
}