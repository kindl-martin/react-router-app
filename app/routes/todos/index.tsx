import {type MetaArgs} from "react-router";

export function meta({}: MetaArgs) {
    return [
        {title: "Todos"},
    ];
}

export default function Index() {
    return (
        <div>Todos</div>
    )
}