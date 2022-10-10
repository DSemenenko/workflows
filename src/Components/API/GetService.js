import { Axios } from "axios";
import React from "react";

export default class GetService{
    static async getUser(){
        try {
            const tele = window.Telegram.WebApp;
            const chatIdTelegram = tele.initDataUnsafe.user.id;
            console.log('Telegram ID.......', chatIdTelegram);
        } catch (error) {
            console.log('Ошииииииииииииибка', error)
        }   
    }
}