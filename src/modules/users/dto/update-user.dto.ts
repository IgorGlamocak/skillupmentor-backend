import { IsEmail, IsOptional, ValidateIf } from 'class-validator'
import { Match } from '../../../decorators/match.decorator'

export class UpdateUserDto {
  @IsOptional()
  first_name?: string

  @IsOptional()
  last_name?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  role_id?: string

  @IsOptional()
  avatar?: string

  @IsOptional()
  password?: string

  // Only validate confirm_password if password was provided
  @ValidateIf((o) => typeof o.password === 'string' && o.password.length > 0)
  @Match(UpdateUserDto, (o) => o.password, {
    message: 'Passwords do not match',
  })
  confirm_password?: string
}
