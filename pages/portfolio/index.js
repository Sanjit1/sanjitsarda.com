import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import { TextInput, Group, UnstyledButton } from "@mantine/core";
import ProjectHolder from "../../components/ProjectHolder";
import {
    IconSearch,
    IconSelector,
    IconChevronDown,
    IconChevronUp,
} from "@tabler/icons";
import { useState, useEffect } from "react";
import res from "./portfolio.json";

export default function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [filter, setFilter] = useState({
        language: [],
        tools: [],
        platform: [],
        types: [],
    });

    useEffect(() => {
        // Fetch projects from json file
        // projects is {projects: [{name: "name", description: "description", src: "src", link: "link", properties: {language: [], tools: [], platform: [], types: []}}]}
        setProjects(res.projects);
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value === "") {
            setProjects(res.projects);
        } else {
            setProjects(
                res.projects.filter((project) => {
                    return (
                        project.name
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase()) ||
                        project.description
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase())
                    );
                })
            );
        }
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
                Here is something I will try, a sorting system.(sike! later,
                scater)
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
                We can use | Icon, Property | for filtering: language, tools, platform, types
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
                    <l>Id</l>
                </UnstyledButton>

                <UnstyledButton
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
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
                    <l>Name</l>
                </UnstyledButton>
                {/* Those were our Sorters, we now need filters */}
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
