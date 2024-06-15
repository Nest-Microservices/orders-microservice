import { OrderStatus } from "@prisma/client";

export const orderStatusList = [
    OrderStatus.CANCELLED,
    OrderStatus.DELIVERED,
    OrderStatus.PENDING,
]

export { OrderStatus };
