import React, { useCallback, useEffect, useState } from 'react'
import { ContentBody, ContentHeader } from '@/shared/ui/Content'
import { Input } from '@/shared/ui/Input'
import QuestionMark from '@/shared/assets/icons/QuestionMark.svg'
import { MultiSelect } from '@/shared/ui/MultiSelect'
import { Button } from '@/shared/ui/Button/Button'
import { CheckboxSquare } from '@/shared/ui/Checkbox'
import { ExclamationMarkSVG } from '@/shared/ui/SVGComponents/ExclamationMarkSVG'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import UploadIcon from '@/shared/assets/icons/UploadIcon.svg'
import clsx from 'clsx'
import TrashIcon from '@/shared/assets/icons/TrashIcon.svg'
import { formatBytes } from '@/shared/utils/utils'
import toast from 'react-hot-toast'
import { useDropzone } from 'react-dropzone'
import { UploadImages } from '@/widgets/HotelAddExternalFiles/model/types'
import { CustomAccordion } from '@/shared/ui/Accordion'
import { DataType } from '@/shared/ui/Accordion/CustomAccordion'
import { RouteNavbar } from '@/shared/ui/RouteNavbar'

const data: DataType[] = [
  {
    id: '1',
    header: 'Видео/аудио',
    text: '',
    content: [
      { id: '1', value: 'DVD-плеер', checked: true },
      { id: '2', value: 'домашний кинотеатр', checked: false },
      { id: '3', value: 'караоке', checked: false },
      { id: '4', value: 'подборка видео/аудио', checked: false },
      { id: '5', value: 'цифровое тв', checked: false },
      { id: '6', value: 'три телевизора', checked: false },
      { id: '7', value: 'HBO (Американская телевизионная сеть)', checked: true },
      { id: '8', value: 'интерактивное телевидение', checked: true },
      { id: '9', value: 'китайский канал', checked: true },
      { id: '10', value: 'спутниковое телевидение', checked: false },
      { id: '11', value: 'телевизор со Smart TV', checked: false },
      { id: '12', value: 'проектор', checked: true },
      { id: '13', value: 'два телевизора', checked: true },
      { id: '14', value: 'кабельное телевидение', checked: true },
      { id: '15', value: 'музыкальный центр', checked: false },
      { id: '16', value: 'телевизор', checked: false },
      { id: '17', value: 'телевизор с плоским экраном', checked: true },
      { id: '18', value: 'четыре телевизора', checked: true }
    ]
  },
  // {
  //   id: '2',
  //   header: 'Электроника',
  //   text: 'кондиционер, настольные лампы, утюг, фен',
  // },
  // {
  //   id: '3',
  //   header: 'Ванная комната',
  //   text: 'банные полотенца, душ, раковина, тапочки, унитаз, халаты',
  // },
  // {
  //   id: '4',
  //   header: 'Внешняя территория и вид из окон',
  //   text: 'вид во двор, вид на горы',
  // },
]


export const NumberCategorySettings = () => {

  const [selectedFiles, setSelectedFiles] = useState<UploadImages[]>([])

  const [checkboxValues, setCheckboxValues] = useState(data)
  useEffect(() => {
    setCheckboxValues(prev => {
      prev[0].text = prev[0].content.filter(item => item.checked).map(item => item.value).join(', ')
      return [...prev]
    })
  }, [])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map(file => {
      const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png']
      if (!acceptedImageTypes.includes(file['type'])) {
        toast.error('Выберите соответствующий тип файла')
        return
      } else if (file.size > 1048576 * 5) {
        toast.error('Файл слишком большой')
        return
      }
      setSelectedFiles(prevFiles => [
        ...prevFiles,
        {
          file,
          preview: URL.createObjectURL(file),
          status: 'uploaded',
          id: prevFiles.length + 1,
        },
      ])
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  useEffect(() => {
    return () =>
      selectedFiles.forEach(file => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <div className="mt-8">
      <ContentHeader className="flex w-full items-center justify-between py-5">
        <p className="font-medium text-lg text-dark">Общие настройки</p>
      </ContentHeader>
      <ContentBody className="flex flex-col gap-5 mb-10">
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Название категории
          </p>
          <Input placeholder="Grand Mildom Hotel"
                 className="w-2/3"
                 icon={ <QuestionMark/> }
          />
        </div>

        <hr className="text-lightgray"/>

        <div className="flex items-start">
          <p className="font-medium flex flex-row items-center gap-2 text-sm text-gray-700 min-w-[280px]">
            Сокращенное название
            <QuestionMark/>
          </p>
          <Input placeholder="Стандарт DBL"
                 className="w-2/3"
          />
        </div>

      </ContentBody>

      <ContentHeader className="flex w-full items-center justify-between py-5">
        <p className="font-medium text-lg text-dark">Интеграция с АСУ</p>
      </ContentHeader>
      <ContentBody className="flex flex-col gap-5 mb-10">
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Внешний код
          </p>
          <Input placeholder="5005938"
                 className="w-1/3"
          />
        </div>
      </ContentBody>

      <ContentHeader className="flex w-full items-center justify-between py-5">
        <p className="font-medium text-lg text-dark">Вместимость номера</p>
      </ContentHeader>
      <ContentBody className="flex flex-col gap-5 mb-10">
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Тип предложения
          </p>
          <MultiSelect
            defaultSelectedValue="Номер"
            outerClassName="!w-1/3"
            options={ [
              { value: 'Отель', id: '1' },
              { value: 'Гостиница', id: '2' },
              { value: 'Номер', id: '3' },
              { value: 'VIP номер', id: '4' },
            ] }
            onChange={ (value) => {
              // if ((Array.isArray(value) && !value.length) || !(value instanceof Object)) {
              //   setCountryError('выбери плз')
              // } else {
              //   setCountryError(undefined)
              // }
              // console.log(value)
            } }
          />
        </div>
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Площадь
          </p>
          <div className="w-[calc(33%+28px)] gap-3 flex flex-row">
            <MultiSelect
              defaultSelectedValue="Одинаковая"
              outerClassName="!w-2/3"
              options={ [
                { value: 'Одинаковая', id: '1' },
                { value: 'Разная', id: '2' },
              ] }
              onChange={ (value) => {
                // if ((Array.isArray(value) && !value.length) || !(value instanceof Object)) {
                //   setCountryError('выбери плз')
                // } else {
                //   setCountryError(undefined)
                // }
                // console.log(value)
              } }
            />
            <span className="w-1/3 flex flex-row gap-2">
                             <Input placeholder="26.00"
                                    className="w-full "
                             />
                             <p>м²</p>
                         </span>
          </div>
        </div>
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Количество комнат
          </p>
          <Input placeholder="1"
                 className="w-1/3"
          />
        </div>

        <hr className="text-lightgray"/>

        <div className="flex items-center gap-3">
          <p className="font-medium text-md text-dark">
            Основные места в номере
          </p>
        </div>
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Количество основных мест
          </p>
          <MultiSelect
            defaultSelectedValue="1"
            outerClassName="!w-1/5"
            options={ [
              { value: '1', id: '1' },
              { value: '2', id: '2' },
              { value: '3', id: '3' },
              { value: '4', id: '4' },
            ] }
            onChange={ (value) => {
            } }
          />
        </div>
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Количество основных мест
          </p>
          <div className="w-1/3 gap-3 flex flex-row">
            <span className="flex gap-2">
              <CheckboxSquare checked={ true } onChange={ () => {
              } }/>
              Одноместное
            </span>
            <span className="flex gap-2">
              <CheckboxSquare checked={ false } onChange={ () => {
              } }/>
              Двухместное
            </span>
          </div>
        </div>

        <hr className="text-lightgray"/>

        <div className="flex items-center gap-3">
          <p className="font-medium text-md text-dark">
            Дополнительные места в номере
          </p>
        </div>

        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Количество доп. мест
          </p>
          <MultiSelect
            defaultSelectedValue="1"
            outerClassName="!w-1/5"
            options={ [
              { value: '1', id: '1' },
              { value: '2', id: '2' },
              { value: '3', id: '3' },
              { value: '4', id: '4' },
            ] }
            onChange={ (value) => {
            } }
          />
        </div>
        <div className="flex items-start">
          <p className="font-medium text-sm text-gray-700 min-w-[280px]">
            Варианты размещения
          </p>
          <span className="flex gap-2">
                        <CheckboxSquare checked={ true } onChange={ () => {
                        } }/>
                        Взрослый
                    </span>
        </div>
      </ContentBody>

      <ContentHeader className="flex w-full items-center justify-between py-5">
        <p className="font-medium text-lg text-dark">Оснащение номера</p>
      </ContentHeader>
      <ContentBody className="flex flex-col gap-5 mb-10">
        <CustomAccordion data={ checkboxValues }>
          {
            checkboxValues[0].content.map(item => (
              <span key={ item.id } className='flex text-start basis-1/3 justify-start py-1.5'>
                                        <span className="font-medium text-sm text-dark flex items-center gap-2">
                                            <CheckboxSquare checkBoxClassName={ clsx(!item.checked && 'bg-white') }
                                                            checked={ item.checked }
                                                            onChange={ (value) => {
                                                              setCheckboxValues((prev) => {
                                                                const foundItem = prev[0].content.find(inneritem => inneritem.id === item.id)
                                                                if (foundItem) {
                                                                  foundItem.checked = value
                                                                }
                                                                return [...prev]
                                                              })
                                                            } }/>
                                          { item.value }
                                        </span>
                                </span>
            ))
          }
        </CustomAccordion>
        {/*<hr className="text-lightgray"/>*/ }
        {/*<CustomAccordion data={data.map(item => {*/ }
        {/*  const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*  newObj.text = 'кондиционер, настольные лампы, утюг, фен'*/ }
        {/*  newObj.header = 'Электроника'*/ }
        {/*  return newObj*/ }
        {/*})}/>*/ }

        {/*  <hr className="text-lightgray"/>*/ }

        {/*  <CustomAccordion data={data.map(item => {*/ }
        {/*    const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*    newObj.text = 'банные полотенца, душ, раковина, тапочки, унитаз, халаты'*/ }
        {/*    newObj.header = 'Ванная комната'*/ }
        {/*    return newObj*/ }
        {/*  })}/>*/ }
        {/*  <hr className="text-lightgray"/>*/ }

        {/*  <CustomAccordion data={data.map(item => {*/ }
        {/*  const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*  newObj.text = 'вид во двор, вид на горы'*/ }
        {/*  newObj.header = 'Внешняя территория и вид из окон'*/ }
        {/*  return newObj*/ }
        {/*})}/>*/ }
        {/*  <hr className="text-lightgray"/>*/ }

        {/*  <CustomAccordion data={data.map(item => {*/ }
        {/*  const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*  newObj.text = 'Wi-Fi, внутренний телефон'*/ }
        {/*  newObj.header = 'Интернет/телефония'*/ }
        {/*  return newObj*/ }
        {/*})}/>*/ }
        {/*  <hr className="text-lightgray"/>*/ }

        {/*  <CustomAccordion data={data.map(item => {*/ }
        {/*  const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*  newObj.text = 'кровать «King size»'*/ }
        {/*  newObj.header = 'Кровати'*/ }
        {/*  return newObj*/ }
        {/*})}/>*/ }
        {/*  <hr className="text-lightgray"/>*/ }

        {/*  <CustomAccordion data={data.map(item => {*/ }
        {/*  const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*  newObj.text = 'вешалки, зеркало, письменный стол, стул, тумба, шкаф для одежды'*/ }
        {/*  newObj.header = 'Мебель'*/ }
        {/*  return newObj*/ }
        {/*})}/>*/ }
        {/*  <hr className="text-lightgray"/>*/ }

        {/*  <CustomAccordion data={data.map(item => {*/ }
        {/*  const newObj = JSON.parse(JSON.stringify(item))*/ }
        {/*  newObj.text = 'ковровое покрытие, мини-бар, номер для некурящих, обслуживание номеров, отопление, питьевая вода, сейф, стаканы, центральное кондиционирование, чайник, чайный набор питьевая вода, сейф, стаканы, центральное кондиционирование, чайник, чайный набор'*/ }
        {/*  newObj.header = 'Прочее'*/ }
        {/*  return newObj*/ }
        {/*})}/>*/ }
        {/*  <hr className="text-lightgray"/>*/ }
        {/*<div className="flex items-start">*/ }
        {/*  <p className="font-medium text-sm text-gray-700 min-w-[280px]">*/ }
        {/*    Видео/аудио*/ }
        {/*  </p>*/ }
        {/*  <p className="flex gap-2">*/ }
        {/*    телевизор со Smart TV*/ }
        {/*  </p>*/ }
        {/*</div>*/ }
      </ContentBody>

      <ContentHeader className="flex w-full items-center justify-between py-5">
        <p className="font-medium text-lg text-dark">Описание номера</p>
      </ContentHeader>
      <ContentBody className="flex flex-col gap-5 mb-10">

        <div className="flex flex-row items-center gap-1 bg-[#EEF4FF] rounded-md px-1 py-2">
          <ExclamationMarkSVG positionCenter={ () => {
            // нужно будет чекнуть длину строки когда данные будут готовы
            if ('не такая уж и длинная сторока') return true
            return false
          } } className="flex items-center"/>
          <p className="flex font-medium leading-[14px] tracking-normal text-darkgray text-left text-sm">
            Расскажите гостям об особенностях или дизайне номера. Добавьте продающее описание в 2-3
            предложениях.
          </p>
        </div>

        <div className="flex items-start">
          <p className="font-medium flex flex-row mt-3 items-center gap-2 text-sm text-gray-700 min-w-[280px]">
            Описание номера
          </p>
          <Textarea
            style={ { backgroundColor: '#E4E7EC' } }
            placeholder="По-домашнему уютный вид номеров категории «Стандарт» представляет собой превосходный вариант для размещения со всеми удобствами и приятным видом на окружающий пейзаж."
            className="mb-5 mt-3 w-2/3 h-40"
          />
        </div>

      </ContentBody>

      <ContentHeader className="flex w-full items-center justify-between py-5">
        <p className="font-medium text-lg text-dark">Фотогалерея номера</p>
      </ContentHeader>
      <ContentBody className="flex flex-col gap-5 mb-10">

        <div className="flex flex-row items-center gap-1 bg-[#EEF4FF] rounded-md px-1 py-2">
          <ExclamationMarkSVG positionCenter={ () => {
            // нужно будет чекнуть длину строки когда данные будут готовы
            if (!'не такая уж и длинная сторока') return true
            return false
          } } className="flex items-center"/>
          <p className="flex font-medium leading-[14px] tracking-normal text-darkgray text-left text-sm">
            Максимальный размер изображения – 10 МБ. Поддерживаются форматы изображений – JPG, PNG и GIF. Максимальное
            количество фотографий – 30.
            Обложка фотогалереи — это фото, которое показывается первым. Чтобы изображение сделать обложкой, разместите
            его первым, справа от кнопки «Загрузить фотографию». Рекомендуем в качестве обложки использовать фото
            спального места.
          </p>
        </div>

        <div className="flex-wrap flex w-full justify-between">

          <div
            { ...getRootProps({ className: 'dropzone' }) }
            className="flex flex-col items-center justify-center border-dashed border-2 rounded-lg border-[#D7D7D7] ml-6 p-4 cursor-pointer"
          >
            <UploadIcon/>
            <p className="text-center mt-5 text-gray">
              <strong className="text-blue">Загрузить фото</strong> или перетащите<br/>
              <span className="text-gray">PNG, JPG</span>
            </p>
            <input
              id="file"
              type="file"
              className="input-zone"
              name="theFile"
              { ...getInputProps() }
            />
          </div>
          <div className="flex gap-5 flex-wrap">
            { selectedFiles?.map((selectedFile, index) => (
              <div
                className="relative w-[120px] group"
                key={ selectedFile.file.name }
              >
							<span
                style={ {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                } }
                className="transition-all duration-200 ease-in-out group-hover:visible invisible flex group-hover:opacity-100 opacity-0 h-20 backdrop-blur-md rounded-xl absolute z-10 w-full items-center justify-center"
              >
								{ selectedFile.status == 'loading' ? (
                  <svg
                    className={ clsx(
                      'h-0 w-0 transition-all ease-out duration-300',
                      selectedFile.status === 'loading' ? 'h-max w-[25px]' : '',
                    ) }
                    version="1.1"
                    id="L9"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 0 0"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                ) : (
                  <div onClick={ () => {
                    setSelectedFiles(prev =>
                      prev.filter((_, i) => i !== index),
                    )
                  } }
                       className="bg-[#FF3030] w-8 p-[6px] h-8 flex items-center justify-center rounded-xl cursor-pointer">
                    <TrashIcon/>
                  </div>
                ) }
							</span>
                <span className="relative w-[120px] h-[80px] block rounded-xl">
								<img
                  className="rounded-xl w-[120px] h-[80px]"
                  width="120"
                  height="80"
                  src={ selectedFile.preview }
                  alt="Загруженная фотография"
                />
							</span>
                <span className="flex flex-col">
								<span className="font-bold text-xs text-dark truncate w-[120px] inline-block mt-2 mb-1">
									{ selectedFile.status !== 'loading'
                    ? selectedFile.file.name
                    : 'Загрузка...' }
								</span>
								<span className="text-xs text-[#5C5C5C]">
									{ formatBytes(selectedFile.file.size) }
								</span>
							</span>
              </div>
            )) }
          </div>
        </div>
      </ContentBody>
      <div className="w-full flex justify-end">
        <Button className="bg-royalblue text-white w-[107px] h-[40px] text-sm">Сохранить</Button>
      </div>

    </div>
  )
}
