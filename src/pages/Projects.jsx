const projects = [
  {
    id: 1,
    name: "مشروع تطوير مجمع سكني",
    description:
      "تطوير مجمع سكني متكامل يحتوي على شقق سكنية وحدائق ومرافق مشتركة.",
    image: "/image/project3.jpg",
    link: "#مشروع التطوير١",
  },
  {
    id: 2,
    name: "مشروع إنشاء مركز تجاري",
    description: "إنشاء مركز تجاري حديث يحتوي على متاجر ومطاعم ومرافق ترفيهية.",
    image: "/image/project2.jpg",
    link: "#مشروع التطوير٢",
  },
  {
    id: 3,
    name: "مشروع إعادة تأهيل مبنى تاريخي",
    description:
      "إعادة تأهيل مبنى تاريخي وتحويله إلى فندق أو مطعم مع الحفاظ على طابعه الأصلي.",
    image: "/image/project4.png",
    link: "#مشروع التطوير٣",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          مشاريعنا
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
            onClick={() => (window.location.href = project.link)}
          >
            <div>
              <img
                src={project.image}
                width={480}
                height={380}
                alt={`صورة لمشروع: ${project.name}`}
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
