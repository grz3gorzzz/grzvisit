"use client";

import ImageStackCard from "@/components/ui/ImageStackCard";

export default function Projects({ limit }) {
  const projects = [
    {
      title: "Йоркширский терьер",
      images: [
        "/images/dogs/dog1-1.jpg",
        "/images/dogs/dog1-2.jpg",
        "/images/dogs/dog1-3.jpg",
      ],
    },
    {
      title: "Шпиц",
      images: [
        "/images/dogs/dog2-1.jpg",
        "/images/dogs/dog2-2.jpg",
        "/images/dogs/dog2-3.jpg",
      ],
    },
    {
      title: "Пудель",
      images: [
        "/images/dogs/dog3-1.jpg",
        "/images/dogs/dog3-2.jpg",
        "/images/dogs/dog3-3.jpg",
      ],
    },
    {
      title: "Мальтипу",
      images: [
        "/images/dogs/dog4-1.jpg",
        "/images/dogs/dog4-2.jpg",
        "/images/dogs/dog4-3.jpg",
      ],
    },
    {
      title: "Корги",
      images: [
        "/images/dogs/dog5-1.jpg",
        "/images/dogs/dog5-2.jpg",
        "/images/dogs/dog5-3.jpg",
      ],
    },
  ];

  const visibleProjects = limit
    ? projects.slice(0, limit)
    : projects;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
      {visibleProjects.map((project, i) => (
        <ImageStackCard
          key={i}
          images={project.images}
          title={project.title}
        />
      ))}
    </section>
  );
}