import { IsString, IsUrl, IsUUID } from "class-validator"


export class PaidOrderDto{

    @IsString()
    stripePaymentId

    @IsString()
    @IsUUID()
    orderId
    
    
    @IsString()
    @IsUrl()
    receiptUrl
}