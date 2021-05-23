enum SIZES {
    S = "S",
    M = "M",
    L = "L",
    XL = "XL"
}

enum OrderStatus {
    SUCCESS = "SUCCESS",
    PENDING = "PENDING",
    FAILURE = "FAILURE",
    CANCELLED = "CANCELLED"
}

enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export type Product = {
    id: number
    name: string
    display_name: string
    thumbnail: string | null
    images: string[] | [] 
    price: number
    color: string[]
    sizes: SIZES[]
    details: {
        title: string
        detail_list: string[]
    },
    brand: {
        name: string
        display_name: string
    }
    number_reviews: number
    number_views: string
    number_sold: number
    is_in_stock: boolean
    is_discount: boolean
    discount: {
        percentage: number
    }
    category: Category | number
    sub_category: SubCategory | number
}


export type Category = {
    id :number
    name: string
    display_name: string
    sub_categories: SubCategory[]
    number_product: number
}

export type SubCategory = {
    id: number
    name: string
    display_name: string
    parent_category: Category
    number_product: number
}

export type ShippingAddress = {
    id: number
    full_name: string
    city: string
    state: string
    address: string
    country: string
}

export type Review = {
    id: number
    product: number
    user: {
        name: string
    }
    title: string
    description: string
    rating: number
}

export type Order = {
    id: number
    user: number
    order_items: OrderItem[]
    status: OrderStatus
    total_amount: number
}

export type OrderItem = {
    product: number
    quantity: number
    price: number
}

export type User = {
    id: number
    first_name: string
    last_name: string
    email: string
    gender: Gender
    avatar: string | null
    is_verified: boolean
    shipping_addresses: ShippingAddress[] | []
    orders: Order[] | []
    reviews: Review [] | []
}