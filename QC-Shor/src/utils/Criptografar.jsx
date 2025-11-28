import CryptoJS from "crypto-js";
import { AES } from "crypto-js";

export function criptografar(msg){
    
    var cipher = CryptoJS.AES.encrypt(msg, 'chaveSecreta').toString();
    
    return cipher;
}