import styles from './login.module.scss'
import {useEffect, useRef}from 'react'
import { captchaAPI } from '@/requests/api'
const view = ()=>{
    useEffect(()=>{
        
    },[])
    const usr = useRef<HTMLInputElement>(null)
    const pwd = useRef<HTMLInputElement>(null)
    const cap = useRef<HTMLInputElement>(null)
    const handleSubmit = (e:React.MouseEvent<HTMLElement>)=>{
        if(usr.current && pwd.current && cap.current)
            console.log(usr.current.value,pwd.current.value,cap.current.value);
    }
    const getCaptchaImg = ()=>{
        captchaAPI().then((res)=>{
            console.log(res);
        })
    }
    return (
        <div className={styles.loginpage}>
            <div className={styles.night}>
                {[...Array(20)].map((x, i) =><div key={i} className={styles.shooting_star}></div>)}
            </div>
            { <div className={styles.login}>
                <div className={styles.box}>
                    <p className={styles.table}>Login</p>
                    <br />
                    <input ref={usr} id="username" type="text" placeholder="Username" />
                    <input ref={pwd} id="password" type="password" placeholder="Password" />
                    <div className={styles.captcha}>
                        <input ref={cap} id="captcha" type="text" placeholder='Captcha'/>
                        <img src="" onClick={getCaptchaImg}/>
                    </div>
                    <br />
                    <a onClick={handleSubmit} className={styles.go}>GO</a>
                </div>
            </div>}
        </div>
    )
}
export default view