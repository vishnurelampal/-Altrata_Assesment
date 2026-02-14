## Resusable Calender component

## Project Structured
   Componentes added and helper functions added
## Testing library added

## Re usable component created which is open to adding new feature and fully customisable 

## By defualt component should haev date as props and addtional styling props are added which are optional

## Defualt component calender example given below
  ## It  will take date as a string or as a date value

         <Calendar date="1999-12-03" />
 

## Custom styled component calender example given below

         <Calendar
          date="1999-12-03"
          className="bg-black text-blue-400"
          headerClassName="text-xl text-yellow-400"
          weekDayClassName="text-red-400"
          dayClassName="hover:bg-blue-200"
          selectedDayClassName="border-white text-black"
        />