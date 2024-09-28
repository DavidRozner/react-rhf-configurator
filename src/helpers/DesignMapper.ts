import { IDesignOption } from "@api";

interface DesignByCategoryOption {
  id: number;
  title: string;
  type: string;
  description: string;
  priceModifier: number;
  weightModifier: number;
}

interface DesignByCategory {
  title: string;
  items: DesignByCategoryOption[];
}

export class DesignMapper {
  public static MapDesignByCategory(
    design: IDesignOption[],
  ): DesignByCategory[] {
    const designByCategory: DesignByCategory[] = [];
    design.forEach((designOption: IDesignOption) => {
      const category = designByCategory.find(
        (category) => category.title === designOption.type,
      );
      if (category) {
        category.items.push(designOption);
      } else {
        designByCategory.push({
          title: designOption.type,
          items: [designOption],
        });
      }
    });
    return designByCategory;
  }
}
