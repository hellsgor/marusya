import { MovieCard, type MovieModel } from '@/entities/movie';
import { useDeleteFromFavoritesMutation } from '@/features/favorites';
import { useState } from 'react';

type FavoriteMovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'> & {
  className?: string;
};

export function FavoriteMovieCard({
  id,
  posterUrl,
  title,
  className,
}: FavoriteMovieCardProps) {
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteFromFavorites({ id }).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MovieCard
      id={id}
      posterUrl={posterUrl}
      title={title}
      className={className}
      onDelete={handleDelete}
      isDeleting={isDeleting}
    />
  );
}
