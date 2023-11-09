import {
  HotelsType,
  ListOfEventsDataType,
  NumberCategoriesType,
  TariffsType,
  TableColumnsType, PaidOptionsDataType, EventOrdersDataType
} from '@/features/Table/model/types'
import ChildIcon from '@/widgets/EventPaidOptionsSettings/icons/Child.svg'

export const tableColumns: TableColumnsType[] = [
  {id: '0', isIncluded: true, title: '', key: 'isToggle', className: {cell: '', cellContent: 'flex justify-center'}},
  {id: '1', isIncluded: true, title: 'Название гостиниц', key: 'name', className: {cell: 'text-start', cellContent: 'flex items-center'}},
  {id: '2', isIncluded: true, title: 'Кол-во номеров', key: 'number_of_rooms', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
  {id: '3', isIncluded: true, title: 'Город', key: 'city', className: {cell: 'text-start', cellContent: 'flex justify-start'}},
  {id: '4', isIncluded: true, title: 'Страна', key: 'country', className: {cell: 'text-start', cellContent: 'flex justify-start'}},
  {id: '5', isIncluded: true, title: '', key: 'changeButton', className: {cell: '', cellContent: 'flex'}},
  {id: '6', isIncluded: true, title: '', key: 'removeButton', className: {cell: '', cellContent: 'flex'}},
]
export const mockHotelsData: HotelsType[] = [
  {
    id: '1',
    name: 'TENGRI',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    number_of_rooms: 25,
    city: 'Алматы',
    country: 'Казахстан',
    isChecked: false,
  },
  {
    id: '2',
    name: 'RIXOS ASTANA',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    number_of_rooms: 25,
    city: 'Астана',
    country: 'Казахстан',
    isChecked: true,
  },
  {
    id: '3',
    name: 'RESORT',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    number_of_rooms: 38,
    city: 'Алматы',
    country: 'Казахстан',
    isChecked: false,

  },
  {
    id: '4',
    name: 'GRAND',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    number_of_rooms: 40,
    city: 'Шымкент',
    country: 'Казахстан',
    isChecked: true,
  },
  {
    id: '5',
    name: 'VISIT',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    number_of_rooms: 40,
    city: 'Семей',
    country: 'Казахстан',
    isChecked: true,
  },
  {
    id: '6',
    name: 'RIXOS AKTAU',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    number_of_rooms: 40,
    city: 'Шымкент',
    country: 'Казахстан',
    isChecked: false,
  },
]
export const numbersTableColumns: TableColumnsType[] = [
  {id: '1', isIncluded: true, title: 'Вкл', key: 'isToggle', className: {cell: 'mx-3', cellContent: 'flex justify-center items-center'}},
  {id: '2', isIncluded: true, title: 'Название категорий', key: 'name', className: {cell: '!pl-0 text-start w-[350px]', cellContent: 'w-[270px]'}},
  {id: '3', isIncluded: true, title: 'Сокращенное название', key: 'abbreviated_ame', className: {cell: '!pl-0 text-start', cellContent: 'flex justify-start'}},
  {id: '4', isIncluded: true, title: 'Внещний код', key: 'external_code', className: {cell: 'text-start', cellContent: 'flex justify-start'}},
  {id: '5', isIncluded: true, title: 'Фото', key: 'photo', className: {cell: '', cellContent: 'flex justify-center'}},
  {id: '6', isIncluded: true, title: 'Основных мест', key: 'main_places', className: {cell: '', cellContent: 'flex justify-center'}},
  {id: '7', isIncluded: true, title: 'Доп. мест', key: 'additional_seats', className: {cell: '', cellContent: 'flex justify-center'}},
  {id: '8', isIncluded: true, title: 'Действие', key: 'action', className: {cell: '', cellContent: 'flex'}},
]
export const mockNumberCategoryData: NumberCategoriesType[] = [
  {
    id: '1',
    isChecked: false,
    name: 'Стандарт с одной большой кроватью или с двумя раздельными',
    abbreviated_ame: 'Стандарт DBL',
    external_code: 5005938,
    photo: 10,
    main_places: 4,
    additional_seats: 1,
  },
  {
    id: '2',
    isChecked: false,
    name: 'Стандарт с двумя раздельными кроватями',
    abbreviated_ame: 'Стандарт TWIN',
    external_code: 5005112,
    photo: 20,
    main_places: 3,
    additional_seats: 1,
  },
  {
    id: '3',
    isChecked: true,
    name: 'Полулюкс',
    abbreviated_ame: 'Полулюкс',
    external_code: 7905938,
    photo: 12,
    main_places: 4,
    additional_seats: 1,
  },
  {
    id: '4',
    isChecked: true,
    name: 'Улучшенный полулюкс',
    abbreviated_ame: 'Полулюкс',
    external_code: 4036938,
    photo: 5,
    main_places: 8,
    additional_seats: 1,
  },
  {
    id: '5',
    isChecked: false,
    name: 'Люкс',
    abbreviated_ame: 'Люкс',
    external_code: 520038,
    photo: 7,
    main_places: 4,
    additional_seats: 1,
  },
  {
    id: '6',
    isChecked: true,
    name: 'Гранд плюс',
    abbreviated_ame: 'Гранд',
    external_code: 5005938,
    photo: 10,
    main_places: 4,
    additional_seats: 1,
  },
]
export const tariffsTableColumns: TableColumnsType[] = [
  {id: '1', isIncluded: true, title: 'Наименование тарифа', key: 'name', className: {cell: 'mx-7 text-start', cellContent: 'mx-7 flex justify-start'}},
  {id: '2', isIncluded: true, title: 'Период действия', key: 'period_of_validity', className: {cell: '!pl-0 text-start', cellContent: ''}},
  {id: '3', isIncluded: true, title: 'Внещний код', key: 'external_code', className: {cell: '!pl-0 text-start', cellContent: 'flex justify-start'}},
  {id: '4', isIncluded: true, title: 'Открыт к продаже', key: 'isToggle', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
  {id: '5', isIncluded: true, title: 'Действие', key: 'action', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
]
export const mockTariffsData: TariffsType[] = [
  {
    id: '1',
    name: 'Тариф с завтраком',
    period_of_validity: '10.05.2020-15.07.2023',
    external_code: 5005938,
    isChecked: true,
  },
  {
    id: '2',
    name: 'Weekly rate BB',
    period_of_validity: '10.05.2020-15.07.2023',
    external_code: 5058698,
    isChecked: true,
  },
  {
    id: '3',
    name: 'Weekly rate BB',
    period_of_validity: '10.05.2020-15.07.2023',
    external_code: 5058698,
    isChecked: false,
  },
  {
    id: '4',
    name: 'Тариф без завтрака',
    period_of_validity: '10.05.2020-15.07.2023',
    external_code: 80055583,
    isChecked: false,
  },
  {
    id: '5',
    name: 'Тариф для каналов',
    period_of_validity: '10.05.2020-15.07.2023',
    external_code: 80055583,
    isChecked: true,
  },
  {
    id: '6',
    name: 'Тариф с обедом',
    period_of_validity: '10.05.2020-15.07.2023',
    external_code: 80055583,
    isChecked: false,
  },
]
export const listOfEventsTableColumns: TableColumnsType[] = [
  {id: '1', isIncluded: true, title: 'Наименование мероприятия', key: 'name', className: {cell: 'mx-7 text-start w-[350px]', cellContent: 'mx-7 flex items-center'}},
  {id: '2', isIncluded: true, title: 'Отзывы', key: 'reviews', className: {cell: '!pl-0', cellContent: 'flex justify-center items-center gap-2'}},
  {id: '3', isIncluded: true, title: 'Количество мест', key: 'number_of_seats', className: {cell: '!pl-0', cellContent: 'flex justify-center !text-gray !bg-transparent'}},
  {id: '4', isIncluded: true, title: 'Фото', key: 'photo', className: {cell: '!pl-0 text-center', cellContent: 'flex justify-center'}},
  {id: '5', isIncluded: true, title: 'Тип', key: 'type', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
  {id: '6', isIncluded: true, title: 'Статус', key: 'status', className: {cell: 'text-center', cellContent: 'flex justify-center items-center gap-2'}},
  {id: '7', isIncluded: true, title: 'Действие', key: 'action', className: {cell: '', cellContent: 'flex justify-center'}},
]
export const mockListOfEventsData: ListOfEventsDataType[] = [
  {
    id: '1',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Экскурсия по Аксу-Жабагылы',
    reviews: { positive: 20, neutral: 30, negative: 10 },
    number_of_seats: 1,
    photo: 10,
    type: 'Индивидуальный',
    status: {name: 'Активный', statusStyle: '!bg-[#ECFDF3] !text-[#027A48] py-1'}
  },
  {
    id: '2',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Тур по Кольсайскому озеру',
    reviews: { positive: 10, neutral: 20, negative: 30 },
    number_of_seats: 45,
    photo: 6,
    type: 'Групповой',
    status: {name: 'Неактивный', statusStyle: '!bg-[#FEF3F2] !text-[#B42318] py-1'}
  },
  {
    id: '3',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Джип тур',
    reviews: { positive: 25, neutral: 10, negative: 5 },
    number_of_seats: 1,
    photo: 12,
    type: 'Индивидуальный',
    status: {name: 'Черновик', statusStyle: '!bg-[#F2F4F7] !text-gray-700 py-1'}
  },
  {
    id: '4',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Тур по Алматинскому зоопарку',
    reviews: { positive: 35, neutral: 3, negative: 8 },
    number_of_seats: 1,
    photo: 10,
    type: 'Индивидуальный',
    status: {name: 'На модерации', statusStyle: '!bg-[#FFFAEB] !text-[#B54708] py-1'}
  },
  {
    id: '5',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Заповедник Алтын Эмель',
    reviews: { positive: 20, neutral: 10, negative: 20 },
    number_of_seats: 54,
    photo: 12,
    type: 'Групповой',
    status: {name: 'Возвращен', statusStyle: '!bg-[#FEF3F2] !text-[#B42318] py-1'}
  },
  {
    id: '6',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Джип тур (VIP)',
    reviews: { positive: 18, neutral: 18, negative: 12 },
    number_of_seats: 50,
    photo: 12,
    type: 'Групповой',
    status: {name: 'Активный', statusStyle: '!bg-[#ECFDF3] !text-[#027A48] py-1'}
  },
  {
    id: '7',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
    name: 'Тур по Медео',
    reviews: { positive: 20, neutral: 26, negative: 17 },
    number_of_seats: 35,
    photo: 12,
    type: 'Групповой',
    status: {name: 'Активный', statusStyle: '!bg-[#ECFDF3] !text-[#027A48] py-1'}
  },
]
// export const scheduleDataTableColumns: TableColumnsType[] = [
//   {id: '1', isIncluded: true, title: 'Наименование мероприятия', key: 'name', className: {cell: 'mx-7 text-start w-[300px]', cellContent: 'mx-7 flex items-center'}},
//   {id: '2', isIncluded: true, title: 'Дата проведения', key: 'dates_of_the_event', className: {cell: '!pl-0', cellContent: 'flex justify-center'}},
//   {id: '3', isIncluded: true, title: 'Время начала', key: 'start_time', className: {cell: '!pl-0 text-center', cellContent: 'flex justify-center'}},
//   {id: '4', isIncluded: true, title: 'Кол-во мест', key: 'number_of_seats', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
//   {id: '5', isIncluded: true, title: 'Место сбора', key: 'gathering_place', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
//   {id: '6', isIncluded: true, title: 'Длительность  ', key: 'duration', className: {cell: '', cellContent: 'flex justify-center'}},
//   {id: '7', isIncluded: true, title: 'Действие', key: 'action', className: {cell: '', cellContent: 'flex justify-center'}},
// ]
// export const mockScheduleData: ScheduleDataType[] = [
//   {
//     id: '1',
//     image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
//     name: 'Экскурсия по Аксу-Жабагылы',
//     dates_of_the_event: 'Будние дни',
//     period_of_validity: '30.06.2023 - 30.08.2023',
//     start_time: ['09.00', '13.00', '15.00', '17.00', '18.00', '19.00', '21.00'],
//     number_of_seats: 15,
//     gathering_place: 'г.Алматы, ул.Розы Бакиева 44',
//     duration: '4 часа'
//   },
//   {
//     id: '2',
//     image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
//     name: 'Экскурсия по Медеу',
//     dates_of_the_event: 'Будние дни',
//     period_of_validity: '30.06.2023 - 30.08.2023',
//     start_time: ['09.00', '13.00', '15.00'],
//     number_of_seats: 15,
//     gathering_place: 'г.Алматы, ул.Розы Бакиева 44',
//     duration: '4 часа'
//   },
//   {
//     id: '3',
//     image: 'https://lh3.googleusercontent.com/p/AF1QipNlGzbJ9R8rNR3LvVKWPOse2Bu1nk6XCS1AQgch=s1280-p-no-v1',
//     name: 'Экскурсия по Алатау',
//     dates_of_the_event: 'Будние дни',
//     period_of_validity: '30.06.2023 - 30.08.2023',
//     start_time: ['09.00', '13.00', '15.00', '17.00', '18.00', '19.00', '21.00'],
//     number_of_seats: 15,
//     gathering_place: 'г.Алматы, ул.Розы Бакиева 44',
//     duration: '4 часа'
//   }
// ]
export const eventPaidOptionsTableColumns: TableColumnsType[] = [
  { id: '1', isIncluded: true, title: 'Наименование', key: 'name', className: {cell: 'mx-7 text-start', cellContent: 'ml-7 flex justify-start'} },
  { id: '2', isIncluded: true, title: 'Тип', key: 'type', className: {cell: 'text-start', cellContent: ''} },
  { id: '3', isIncluded: true, title: 'Категория', key: 'category', className: {cell: 'text-start w-[50px]', cellContent: 'flex justify-start'} },
  { id: '4', isIncluded: true, title: 'Цена', key: 'price', className: {cell: 'text-center min-w-[100px]', cellContent: 'flex justify-center'} },
  { id: '5', isIncluded: true, title: '', key: 'action', className: {cell: '', cellContent: 'flex justify-center'} },
]
export const mockPaidOptionsData: PaidOptionsDataType[] = [
  {
    id: '1',
    name: 'Название опции',
    type: 'Платный',
    category: {icon: ChildIcon, title: 'Детский'},
    price: '10 000',
  },
  {
    id: '2',
    name: 'Название опции',
    type: 'Бесплатный',
    category: {icon: ChildIcon, title: 'Инвентарь'},
    price: '0',
  },
  {
    id: '3',
    name: 'Название опции',
    type: 'Платный',
    category: {icon: ChildIcon, title: 'Детский'},
    price: '10 000',
  },
]
export const eventOrdersTableColumns: TableColumnsType[]  = [
  { id: '1', isIncluded: true, title: 'ID', key: 'id', className: {cell: 'mx-7 text-start', cellContent: 'ml-7 flex justify-start text-gray-900 !font-medium'} },
  { id: '2', isIncluded: true, title: 'ФИО человека', key: 'name', className: {cell: 'mx-7 text-start', cellContent: 'ml-7 flex justify-start'} },
  { id: '3', isIncluded: true, title: 'Дата/Время', key: 'date_time', className: {cell: 'text-start', cellContent: ''} },
  { id: '5', isIncluded: true, title: 'Сумма заказа', key: 'order_amount', className: {cell: 'text-center min-w-[100px]', cellContent: 'flex justify-center'} },
  { id: '5', isIncluded: true, title: 'Источник', key: 'source', className: {cell: 'text-center min-w-[100px]', cellContent: 'flex justify-center'} },
  { id: '5', isIncluded: true, title: 'Тип заказа', key: 'order_type', className: {cell: 'text-center min-w-[100px]', cellContent: 'flex justify-center'} },
  { id: '6', isIncluded: true, title: '', key: 'action', className: {cell: '', cellContent: 'flex justify-center'} },
]

export const mockOrdersTableColumns: EventOrdersDataType[] = [
  {
    id: '#123456789',
    name: 'Иван Иванов',
    date_time: '30.06.2023 - 18.00',
    order_amount: 50000,
    source: 'MTour',
    order_type: {name: 'Покупка', statusStyle: '!bg-[#ECFDF3] !text-[#027A48] py-1'}
  },
  {
    id: '#234567891',
    name: 'Иван Иванов',
    date_time: '01.06.2023 - 10.00',
    order_amount: 25000,
    source: 'MTour',
    order_type: {name: 'Возврат', statusStyle: '!bg-[#FEF3F2] !text-[#B42318] py-1'}
  },
  {
    id: '#345678912',
    name: 'Иван Иванов',
    date_time: '30.08.2023 - 18.00',
    order_amount: 40000,
    source: 'Оффлайн',
    order_type: {name: 'Завершенный', statusStyle: '!bg-indigo-50 !text-indigo-700 py-1'}
  },
  {
    id: '#456789123',
    name: 'Иван Алдияр',
    date_time: '20.04.2023 - 12.00',
    order_amount: 12000,
    source: 'MTour',
    order_type: {name: 'Тестовый', statusStyle: '!bg-[#FFFAEB] !text-[#B54708] py-1'}
  },
  {
    id: '#567891234',
    name: 'Иван Иванов',
    date_time: '30.06.2023 - 18.00',
    order_amount: 18000,
    source: 'Оффлайн',
    order_type: {name: 'Покупка', statusStyle: '!bg-[#ECFDF3] !text-[#027A48] py-1'}
  },
  {
    id: '#678912345',
    name: 'Иван Иванов',
    date_time: '30.06.2023 - 18.00',
    order_amount: 25000,
    source: 'Оффлайн',
    order_type: {name: 'Покупка', statusStyle: '!bg-[#ECFDF3] !text-[#027A48] py-1'}
  },
]
export const scheduleDataTableColumns: TableColumnsType[] = [
  {id: '1', isIncluded: true, title: 'Код мероприятия', key: 'id', className: {cell: 'text-start', cellContent: 'ml-7 flex items-center text-gray-900 !font-medium'}},
  {id: '2', isIncluded: true, title: 'Время начала', key: 'start_time', className: {cell: '!pl-0', cellContent: 'flex justify-center'}},
  {id: '3', isIncluded: true, title: 'Дата проведения', key: 'date_of_the_event', className: {cell: '!pl-0 text-center', cellContent: 'flex justify-center'}},
  {id: '4', isIncluded: true, title: 'Кол-во мест', key: 'number_of_seats', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
  {id: '5', isIncluded: true, title: 'Кол-во заказов', key: 'number_of_orders', className: {cell: 'text-center', cellContent: 'flex justify-center'}},
  {id: '6', isIncluded: true, title: 'Кол-во свободных мест', key: 'number_of_available_seats', className: {cell: 'text-center w-[140px]', cellContent: 'flex justify-center'}},
  {id: '7', isIncluded: true, title: 'Длительность  ', key: 'duration', className: {cell: '', cellContent: 'flex justify-center'}},
  {id: '8', isIncluded: true, title: '', key: 'action', className: {cell: '', cellContent: 'flex justify-center'}},
]

