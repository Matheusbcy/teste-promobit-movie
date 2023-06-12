import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContexts } from "./GlobalContext";

export default function GlobalState(props) {
  const [allFilmes, setAllFilmes] = useState([]);
  const [filmeById, setFilmeById] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filterClicked, setFilterClicked] = useState(false);
  const [releaseDates, setReleaseDates] = useState();
  const [credits, setCredits] = useState();
  const [video, setVideo] = useState([]);
  
  const headers = {
    accept: "application/json",
    Authorization:
    {{sua key TMDB}},
  };

  const getFavoritFilmes = async () => {
    const totalPages = 3;

    let allMovies = [];

    for (let page = 1; page <= totalPages; page++) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
          { headers }
        );
        const movies = response.data.results;
        allMovies = allMovies.concat(movies);
      } catch (error) {
        console.log("error:", error.message);
      }
    }

    setAllFilmes(allMovies);
  };

  const getFilmById = async (id) => {
    try {
      const response = await axios.get(
        `
        https://api.themoviedb.org/3/movie/${id}`,
        { headers }
      );
      setFilmeById(response.data);
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  const handleFilterSelect = (filtro) => {
    if (selectedFilters.includes(filtro)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filtro));
    } else {
      setSelectedFilters([...selectedFilters, filtro]);
    }
    setFilterClicked(true);
  };

  const getReleaseDates = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/release_dates`,
        { headers }
      );
      setReleaseDates(response.data);
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  const getCreditsDates = async (id) => {
    try {
      const response = await axios.get(
        `
        https://api.themoviedb.org/3/movie/${id}/credits`,
        { headers }
      );
      setCredits(response.data);
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  const getVideo = async (id) => {
    try {
      const response = await axios.get(
        `
        https://api.themoviedb.org/3/movie/${id}/videos`,
        { headers }
      );
      setVideo(response.data);
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  useEffect(() => {
    getFavoritFilmes();
  }, []);

  const context = {
    allFilmes,
    getFilmById,
    filmeById,
    selectedFilters,
    handleFilterSelect,
    filterClicked,
    getReleaseDates,
    releaseDates,
    getCreditsDates,
    credits,
    getVideo,
    video,
  };
  return (
    <GlobalContexts.Provider value={context}>
      {props.children}
    </GlobalContexts.Provider>
  );
}
