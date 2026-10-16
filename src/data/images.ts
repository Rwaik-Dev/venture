import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import newsWait from "@/assets/images/news-wait.jpg";
import newsSchedule from "@/assets/images/news-schedule.jpg";
import newsOffices from "@/assets/images/news-offices.jpg";
import newsFare from "@/assets/images/news-fare.jpg";
import valuesMission from "@/assets/images/values-mission.jpg";
import valuesVision from "@/assets/images/values-vision.jpg";
import valuesValues from "@/assets/images/values-values.jpg";

export const localImages = {
  hero: [hero1, hero2, hero3],
  news: {
    wait: newsWait,
    schedule: newsSchedule,
    offices: newsOffices,
    fare: newsFare,
  },
  values: {
    mission: valuesMission,
    vision: valuesVision,
    values: valuesValues,
  },
} as const;
