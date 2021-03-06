import React, {useState} from "react";
import Movie from "./TV";
import Pagination from "../Paging/Paging";
import { paginate } from "../Paging/paginate";
import "./TVList.css";

const TVList = ({results, genres, name}) => {
    const [movies, setMovies] = useState({
        data: results,
        pageSize: 5,
        currentPage: 1
    });

    const handlePageChange = (page) => {
        setMovies({ ...movies, currentPage: page });
    }

    const { data, pageSize, currentPage } = movies;
    const pagedMovies = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴
    console.log(movies)
    console.log(results)
    if (movies.data === undefined)
        return <p>영화 정보가 없습니다.</p>;

    const { length: count } = movies.data;
    if (count === 0) 
        return <p>영화 정보가 없습니다.</p>;

    return (
        <section className="movielist">
            <h2>{name}</h2>
            <div className="movies">
                {pagedMovies.map(movie => (
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.first_air_date}
                    title={movie.name}
                    summary={movie.overview}
                    poster={movie.poster_path}
                    backdrop={movie.backdrop_path}
                    />
                ))}
            </div>
            <Pagination
                pageSize = {pageSize}
                itemsCount={count}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </section>
    );
}


export default TVList;
