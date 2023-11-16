import CategoryCard from '@/Components/component/CategoryCard'

const CategorySection = () => {
    return (
        <section className="container">
            CategorySection
            <div className='grid grid-cols-4 gap-4'>
                <CategoryCard />
                <CategoryCard /> 
                <CategoryCard /> 
                <CategoryCard /> 
                <CategoryCard /> 
                <CategoryCard /> 
                <CategoryCard />
                <CategoryCard />
            </div>
        </section>
    )
}
export default CategorySection