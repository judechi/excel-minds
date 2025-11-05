export default function Courses(){
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">IB English B</h3>
          <p className="text-sm text-gray-600">Language acquisition support & exam skills.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Language & Literature (Language A)</h3>
          <p className="text-sm text-gray-600">Analysis, commentary and exam prep.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">IGCSE ESL / Literature</h3>
          <p className="text-sm text-gray-600">Gain strategies to achieve A* / A+.</p>
        </div>
      </div>
    </section>
  )
}
