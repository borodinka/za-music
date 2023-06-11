import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { search } from "services/api";
import { TableTitle, Wrapper } from "./styled";
import TracksTable from "components/TracksTable";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await search(searchQuery);
        setTracks(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) loadData();
  }, [searchQuery]);

  return (
    <Wrapper>
      <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
      {tracks?.length > 0 && (
        <div>
          <TableTitle>Results by: {searchQuery}</TableTitle>
          <TracksTable isLoading={isLoading} tracks={tracks} />
        </div>
      )}
    </Wrapper>
  );
}

export default Search;
