import { AnimatedPhotoShowcase } from "./AnimatedPhotoShowcase";

const gymPhotos = [
  {
    src: "https://placehold.co/600x400/1e293b/facc15?text=Gym+Photo+1",
    alt: "Photo of the main gym floor",
  },
  {
    src: "https://placehold.co/600x400/facc15/1e293b?text=Gym+Photo+2",
    alt: "Photo of the weightlifting area",
  },
  {
    src: "https://placehold.co/600x400/1e293b/facc15?text=Gym+Photo+3",
    alt: "Photo of a yoga class in session",
  },
  {
    src: "https://placehold.co/600x400/facc15/1e293b?text=Gym+Photo+4",
    alt: "Photo of the cardio equipment",
  },
];

export default function MyPage() {
  return (
    <section className="bg-gray-900 text-white text-center">
      <div>
        <div>
          <h1 className="text-3xl">hy</h1>
          <AnimatedPhotoShowcase images={gymPhotos} />
        </div>
      </div>
      {/* Other sections */}

      {/* Other sections */}
    </section>
  );
}
