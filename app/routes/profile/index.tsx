import {type MetaArgs} from "react-router";

export function meta({}: MetaArgs) {
    return [
        {title: "Profile"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Index() {
    return (
        <div>Profile</div>
    )
}