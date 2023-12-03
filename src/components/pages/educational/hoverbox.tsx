import * as React from "react";
import * as Styles from "./hoverbox.module.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FC, PropsWithChildren, ReactElement} from "react";

type Props = PropsWithChildren<{
    overlayChildren: ReactElement
}>

const HoverBox: FC<Props> = ({children, overlayChildren}) => {

    return (
        <div className={Styles.container}>
            {children}

            <div className={Styles.overlay}>
                {overlayChildren}
            </div>

            <FontAwesomeIcon className={Styles.hint} icon={faSearch} inverse/>
        </div>
    )
}

export default HoverBox