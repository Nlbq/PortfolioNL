import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom'
import DynamicText from '../components/DynamicText'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import SocialNetwork from '../components/SocialNetwork'
// import { Motion } from "framer-motion";

export default function Home() {

    // const variants = {
    //     initial: {
    //         opacity: 0,
    //         transition: {duration: 0.5},
    //         x: 100,
    //     },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //     },
    //     exit: {

    //     }
    // }


    return (
        <main>
            <Mouse />
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Labruquère Nicolas</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <ButtonsBottom right={"/project-1"} />
            </div>
        </main>
    )
}
