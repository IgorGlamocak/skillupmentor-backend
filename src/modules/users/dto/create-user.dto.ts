import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator'
import { Match } from '../../../decorators/match.decorator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  first_name?: string

  @ApiProperty({ required: false })
  @IsOptional()
  last_name?: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ required: false })
  @IsNotEmpty()
  role_id: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Matches(/^(?=.*\d)[A-Za-z.\s_-]+[\w~@#$%^&*+='{};!?:".?()\[\]-]{6,}$/, {
    message:
      'Password must have at least one number, lower or upper case letter and it has to be longer than 5 characters.',
  })
  password: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Match(CreateUserDto, (field) => field.password, { message: 'Passwords do not match' })
  confirm_password: string
}
