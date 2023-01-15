import { IsUrl } from 'class-validator';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto
  extends Omit<Category, 'id' | 'updatedAt' | 'creationAt'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'asada';
    dto.image =
      'https://ivangutierrez92.github.io/fotollama/images/san-antonio/plaza1.jpg?imwidth=1080';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
