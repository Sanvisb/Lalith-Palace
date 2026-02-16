function Accommodations() {
  const rooms = [
    {
       id: 1,
       image: `${import.meta.env.BASE_URL}bedroom6.jpeg`,
       title: 'Ground Floor – Room 1',
       description: 'A well maintained and cozy room designed for a comfortable stay, featuring clean interior, soft lighting and peaceful ambience ideal for rest and relaxation'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}bedroom1.jpeg`,
      title: 'Ground Floor – Room 2',
      description: 'A balance between minimalist restraint and personal expression, often pairing sleek modern furniture with luxurious comfort'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}upperbedroom1.jpeg`,
      title: 'First Floor – Room 1',
      description: 'A neatly maintained room that provides a calm environment, simple decor and a restful setting after a long day.'
    },
    {
      id: 4,
      image: `${import.meta.env.BASE_URL}bedroom4.jpeg`,
      title: 'First Floor – Room 2',
      description: 'This premium room offers comfort withmtranquil atmosphere. Ideal for guests who value privacy and convenience.'
    },
    {
      id: 5,
      image: `${import.meta.env.BASE_URL}bedroom5.jpeg`,
      title: 'First Floor – Room 3',
      description: 'This well appointed room offers a warm and relaxing atmosphere, ideal for both short and extended stays.'
    }
  ];

  return (
    <div className="p-8 md:px-16 md:py-8 max-w-[1400px] mx-auto">
      <h1 className="text-accent font-serif text-center mb-12 text-[2.5rem]">ACCOMMODATIONS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map(room => (
          <div key={room.id} className="bg-white shadow-md rounded overflow-hidden transition-transform duration-200 hover:-translate-y-1">
            <div className="h-[300px] overflow-hidden bg-[#f5f5f5]">
                <img src={room.image} alt={room.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-text-primary font-serif text-xl font-semibold">{room.title}</h3>
                <p className="text-subtext text-sm leading-relaxed">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accommodations;
