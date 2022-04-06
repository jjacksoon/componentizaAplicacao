
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface CategoryProps{
  selectedGenre: GenreResponseProps
}

export function Category({selectedGenre} : CategoryProps){
  return(
    <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>
  );
}