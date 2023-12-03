import * as React from "react";
import * as Styles from "./temporarymessage.module.scss"
import {FC, PropsWithChildren} from "react";

type Props = PropsWithChildren<{
    className: string
}>
const TemporaryMessage: FC<Props> = ({children, className}) => {
    return (
        <div className={`${className} constrainedContent`}>
            <div className={Styles.container}>
                <div className={Styles.message}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TemporaryMessage