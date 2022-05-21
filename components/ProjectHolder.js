function ProjectHolder({ children }) {
    const holderStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "20px",
    };
    return <div style={holderStyle}>{children}</div>;
}

export default ProjectHolder;
