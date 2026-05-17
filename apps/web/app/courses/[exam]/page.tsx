import { notFound } from 'next/navigation';
import { getCourse, ALL_EXAM_TYPES } from '@/lib/courses';
import ExamCourseClient from './ExamCourseClient';

interface Props {
  params: Promise<{ exam: string }>;
}

export async function generateStaticParams() {
  return ALL_EXAM_TYPES.map((exam) => ({ exam }));
}

export async function generateMetadata({ params }: Props) {
  const { exam } = await params;
  const course = getCourse(exam);
  if (!course) return {};
  return {
    title: `${course.title} · IELTS Trainer`,
    description: course.description,
  };
}

export default async function ExamCoursePage({ params }: Props) {
  const { exam } = await params;
  const course = getCourse(exam);
  if (!course) notFound();

  const allModules = course.tiers.flatMap((t) => t.modules);
  const freeModuleCount = allModules.filter((m) => m.free).length;

  return <ExamCourseClient course={course} exam={exam} freeModuleCount={freeModuleCount} />;
}
