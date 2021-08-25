import React from "react";
import Spinner from "../components/common/Spinner/Spinner";


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Spinner />} >
            <Component {...props} />
        </React.Suspense>
    };
}