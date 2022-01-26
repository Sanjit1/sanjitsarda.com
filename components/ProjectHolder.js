import Link from "next/link";
import Image from "next/image";
import { holder } from "./styles/ProjectHolder.module.css";

function ProjectHolder({ children }) {
    return <div className={holder}>{children}</div>;
}

export default ProjectHolder;
