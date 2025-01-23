import { useCatData } from '../hooks/useCatData';

export const About = ({ name, onGoBack }) => {
  const { about } = useCatData();
  const hasAboutData = Boolean(about[name]);

  return (
    <div className="flex flex-col items-center justify-center px-12 py-10">
      <img
        onClick={onGoBack}
        id="back"
        src="/assets/images/icons/back-icon.svg"
        className="mb-2 h-6 w-6 place-self-start hover:cursor-pointer"
      />
      <h1 className="text-center text-xl font-bold">{name}</h1>
      <img
        src={`/assets/images/cats/${name}.png`}
        className="my-8 h-48 w-48 object-contain"
      />
      {hasAboutData && (
        <div className="h-52 overflow-scroll">
          <h2 className="mb-2 font-bold">About</h2>
          <p className="text-sm">
            &quot;{about[name]['text']}&quot; [KnowYourMeme, Jan 2025](
            <a
              href={`https://knowyourmeme.com/memes/${about[name]['slug']}`}
              target="_blank"
              className="text-gato-violet"
            >
              Find out more
            </a>
            )
          </p>
        </div>
      )}
    </div>
  );
};
