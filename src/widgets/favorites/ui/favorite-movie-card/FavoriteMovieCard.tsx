import { MovieCard, type MovieModel } from '@/entities/movie';
import { useDeleteFromFavoritesMutation } from '@/features/favorites';

type FavoriteMovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'> & {
  className?: string;
};

export function FavoriteMovieCard({
  id,
  posterUrl,
  title,
  className,
}: FavoriteMovieCardProps) {
  const [deleteFromFavorites, { isLoading }] = useDeleteFromFavoritesMutation();

  const handleDelete = () => {
    deleteFromFavorites({ id });
  };

  return (
    <MovieCard
      id={id}
      posterUrl={posterUrl}
      title={title}
      className={className}
      onDelete={handleDelete}
      isDeleting={isLoading}
    />
  );
}
