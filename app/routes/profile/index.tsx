import {type MetaArgs} from "react-router";

export function meta({}: MetaArgs) {
    return [
        {title: "Profile"},
    ];
}

export default function Index() {
    return (
        <div>Profile</div>
    )
}