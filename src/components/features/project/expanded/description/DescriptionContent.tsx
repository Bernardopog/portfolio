import { useTranslations } from 'next-intl';
import {
  Challenges,
  Description,
  FeatureList,
  FuturePlans,
  Highlights,
  Learnings,
  TechStack,
} from '@/components/shared/project/descriptions';
import { useProjectExpandedSectionStore } from '@/store/ProjectExpandedSectionStore';
import type { IDescription } from '@/types/interfaces/IProject';
import DescriptionContentController from './DescriptionContentController';

export default function DescriptionContent({
  description,
}: {
  description?: IDescription;
}) {
  const t = useTranslations('Projects.Expanded');

  const hasToResizeImage = useProjectExpandedSectionStore(
    (s) => s.hasToResizeImage,
  );

  if (!description) return null;
  const {
    content,
    features,
    techs,
    highlights,
    challenges,
    learnings,
    futurePlans,
  } = description;

  return (
    <section
      className={`project-expanded-card group flex flex-col gap-2 min-h-0 max-h-full p-2 overflow-y-auto scrollbar-base sm:row-span-2 ${hasToResizeImage && 'md:col-start-2 md:row-start-3 md:row-end-4'}`}
    >
      {hasToResizeImage ? (
        <p className='text-center text-shark-950 dark:text-shark-50'>
          {t('UnavailableDescription')}
        </p>
      ) : (
        <>
          <DescriptionContentController />
          {content && <Description content={content} />}
          {features && <FeatureList featureList={features} />}
          {techs && <TechStack techList={techs} />}
          {highlights && <Highlights highlightList={highlights} />}
          {challenges && <Challenges challengeList={challenges} />}
          {learnings && <Learnings learningsList={learnings} />}
          {futurePlans && <FuturePlans plans={futurePlans} />}
        </>
      )}
    </section>
  );
}
