import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import { TextInput, Group, UnstyledButton, MultiSelect } from "@mantine/core";
import ProjectHolder from "../../components/ProjectHolder";
import {
    IconSearch,
    IconSelector,
    IconChevronDown,
    IconChevronUp,
    IconCaretDown,
    IconCaretUp,
} from "@tabler/icons";
import { useState, useEffect } from "react";
import res from "./portfolio.json";

export default function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [filterProperties, setFilterProperties] = useState({
        languages: [],
        frameworks: [],
        platforms: [],
        types: [],
    });
    const [filter, setFilter] = useState({
        languages: [],
        frameworks: [],
        platforms: [],
        types: [],
    });

    useEffect(() => {
        // Fetch projects from json file
        // projects is {projects: [{name: "name", description: "description", src: "src", link: "link", properties: {languages: [], frameworks: [], platforms: [], types: []}}]}
        setProjects(res.projects);
        // We want to get all the possible filter properties
        setFilterProperties({
            languages: [
                ...new Set(
                    res.projects
                        .map((project) => project.properties.languages)
                        .flat()
                ),
            ],
            frameworks: [
                ...new Set(
                    res.projects
                        .map((project) => project.properties.frameworks)
                        .flat()
                ),
            ],
            platforms: [
                ...new Set(
                    res.projects
                        .map((project) => project.properties.platforms)
                        .flat()
                ),
            ],
            types: [
                ...new Set(
                    res.projects
                        .map((project) => project.properties.types)
                        .flat()
                ),
            ],
        });
    }, []);

    useEffect(() => {
        console.log(filterProperties);
    }, [filterProperties]);

    useEffect(() => {
        // We want to use a temporary array to copy the projects array
        let tempProjects = JSON.parse(JSON.stringify(res.projects));
        console.log("filter changed");
        console.log(filter);
        // We will use this to search, filter, and sort the projects
        // First we will filter
        // We want to track search and the filters and re-filter the projects array if they change
        const filterProjects = (project, filterName) => {
            if (filter[filterName].length > 0) {
                return project.properties[filterName].some((item) =>
                    filter[filterName].includes(item)
                );
            } else {
                return true;
            }
        };

        console.log(tempProjects);

        tempProjects = tempProjects.filter((project) => {
            // We want to return true if it meets a few conditions
            // 1. The name or description contains the search string (if search is not empty)
            // 2. For each of the filters, the project's filter array contains any of the filter.filter array (if the filter.filter array is not empty)
            // We can tell that all the filter functions are the same, so we can make a function to do it for us
            return (
                (search == "" ||
                    project.name.toLowerCase().includes(search.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(search.toLowerCase())) &&
                filterProjects(project, "languages") &&
                filterProjects(project, "frameworks") &&
                filterProjects(project, "platforms") &&
                filterProjects(project, "types")
            );
        });
        // finally, we want to sort the projects
        if (sort == "name") {
            if (sortOrder == "asc") {
                tempProjects = tempProjects.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            } else {
                tempProjects = tempProjects.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }
        } else if (sort == "id") {
            if (sortOrder == "asc") {
                tempProjects = tempProjects.sort((a, b) => a.id - b.id);
            } else {
                tempProjects = tempProjects.sort((a, b) => b.id - a.id);
            }
        }
        setProjects(tempProjects);
        console.log(tempProjects);
    }, [search, filter, sort, sortOrder]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // We want to track sort and sortOrder and re-arange the projects array if they change

    // We want to create two things: nameSortIcon and idSortIcon
    // They will be IconChevronUp or IconChevronDown depending on the sort order and IconSelector if the sort is not on that property
    const NameSortIcon =
        sort === "name"
            ? sortOrder === "asc"
                ? IconChevronUp
                : IconChevronDown
            : IconSelector;
    const IdSortIcon =
        sort === "id"
            ? sortOrder === "asc"
                ? IconChevronUp
                : IconChevronDown
            : IconSelector;

    // when we first load the page, we want to sort by id and desc

    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content="Portfolio Page of Sanjit Sarda's website: This shows my projects."
                />
            </Head>
            <h1>Portfolio</h1>
            <p>
                Hi. If you want to look at some of the work on things Here are
                some of the things I have worked on and stuff. I do not like
                featuring small projects, so you will find <em>some</em> of them
                here: If I showcase a tiny project here, it is probably because
                I use it a ton or I find it significant for some other reason.
                You might find <em>some</em> of my other projects on my{" "}
                <Link href="https://github.com/Sanjit1">
                    <a>GitHub</a>
                </Link>
                , but I keep most of my personal projects private. I don't have
                everything on there, so if you want to know about some of my
                projects, feel free to email me!
            </p>
            <p>
                Here is something I will try, a sorting system. Wow this took
                time to make.
            </p>

            <TextInput
                type="text"
                name="search"
                id="search"
                value={search}
                icon={<IconSearch />}
                onChange={handleSearch}
            />

            <br />

            {/* 
                Add filtering and sorting here 
                What we want is a list of projects, each with a name, description, image, link, and properties.
                In the UI, we will have a bar for filtering and sorting.
                We can use | Icon, Property | for sorting: name, id
                We can use | Icon, Property | for filtering: languages, frameworks, platforms, types
                There will be a dropdown for filtering, when you click on the filter, it will show a list of all the properties.
            */}

            {/* We can use a table to separate stuff */}
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                }}
            >
                <UnstyledButton
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                    }}
                    onClick={() => {
                        if (sort === "id") {
                            setSort("id");
                            if (sortOrder === "asc") {
                                setSortOrder("desc");
                                setProjects(
                                    res.projects.sort((a, b) => {
                                        return b.id - a.id;
                                    })
                                );
                            } else {
                                setSortOrder("asc");
                                setProjects(
                                    res.projects.sort((a, b) => {
                                        return a.id - b.id;
                                    })
                                );
                            }
                        } else {
                            setSort("id");
                            setSortOrder("asc");
                            setProjects(
                                res.projects.sort((a, b) => {
                                    return a.id - b.id;
                                })
                            );
                        }
                    }}
                >
                    <IdSortIcon />
                    <l
                        style={{
                            flexGrow: 1,
                            textAlign: "left",
                            marginLeft: "0.5rem",
                        }}
                    >
                        Id
                    </l>
                </UnstyledButton>

                <UnstyledButton
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                    }}
                    onClick={() => {
                        if (sort === "name") {
                            setSort("name");
                            if (sortOrder === "asc") {
                                setSortOrder("desc");
                                setProjects(
                                    res.projects.sort((a, b) => {
                                        return b.name.localeCompare(a.name);
                                    })
                                );
                            } else {
                                setSortOrder("asc");
                                setProjects(
                                    res.projects.sort((a, b) => {
                                        return a.name.localeCompare(b.name);
                                    })
                                );
                            }
                        } else {
                            setSort("name");
                            setSortOrder("desc");
                            setProjects(
                                res.projects.sort((a, b) => {
                                    return b.name.localeCompare(a.name);
                                })
                            );
                        }
                    }}
                >
                    <NameSortIcon />
                    <l
                        style={{
                            flexGrow: 1,
                            textAlign: "left",
                            marginLeft: "0.5rem",
                        }}
                    >
                        Name
                    </l>
                </UnstyledButton>
                {/* Those were our Sorters, we now need filters */}
                <MultiSelect
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                    }}
                    data={filterProperties.languages}
                    placeholder="Languages"
                    clearable={true}
                    onChange={(e) => {
                        console.log(e);
                        setFilter({
                            ...filter,
                            languages: e,
                        });
                    }}
                />
                <MultiSelect
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                    }}
                    data={filterProperties.frameworks}
                    placeholder="Frameworks"
                    clearable={true}
                    onChange={(e) => {
                        console.log(e);
                        setFilter({
                            ...filter,
                            frameworks: e,
                        });
                    }}
                />
                <MultiSelect
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                    }}
                    data={filterProperties.platforms}
                    placeholder="Platforms"
                    clearable={true}
                    onChange={(e) => {
                        console.log(e);
                        setFilter({
                            ...filter,
                            platforms: e,
                        });
                    }}
                />
                <MultiSelect
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                    }}
                    data={filterProperties.types}
                    placeholder="Types"
                    clearable={true}
                    onChange={(e) => {
                        console.log(e);
                        setFilter({
                            ...filter,
                            types: e,
                        });
                    }}
                />
            </div>

            <br />

            <ProjectHolder>
                {projects.map((project, index) => {
                    return (
                        <Card
                            name={project.name}
                            description={project.description}
                            src={project.image}
                            link={project.link}
                            properties={project.properties}
                            linked={true}
                            key={index}
                        />
                    );
                })}
            </ProjectHolder>
        </div>
    );
}
