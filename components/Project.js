import Link from "next/link";
import Image from "next/image";

/**
 * props: project
 *      name
 *      description
 *      src(for image)
 *      dates(not yet)
 *      link(a link for the project: repo/site/page etc)
 */

function Project(props) {
    return (
        <div className="project">
            <h5>{props.name}</h5>
        </div>
    );
}

export default Project;
