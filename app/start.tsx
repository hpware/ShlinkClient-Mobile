import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as sql from 'expo-sqlite';


export default function startPage() {
    // Values
    const [step, setstep] = useState<number | null>(null);
    // sql Commands
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
        
    </View>
    )
}