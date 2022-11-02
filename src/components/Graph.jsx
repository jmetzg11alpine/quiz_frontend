import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

const Graph = ({ graph_name, data }) => {
  let ReferenceD3 = graph_name
  ReferenceD3 = useRef()

  const names = data.map(function (d) {
    return d[0]
  })

  useEffect(() => {
    const width = window.innerWidth * 0.7
    const height = window.innerHeight * 0.5
    const margin = {
      top: height * 0.1,
      right: width * 0.15,
      bottom: height * 0.15,
      left: width * 0.15,
    }
    const svg = d3.select(ReferenceD3.current)
    svg.selectAll('*').remove()

    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // X axis
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right])
      .padding(0.1)
    svg
      .append('g')
      .attr('transform', 'translate(0, ' + height + ')')
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => names[i])
          .tickSizeOuter(0)
      )
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end')
      .style('font-size', width * 0.03)

    // Y axis
    const y = d3.scaleLinear().domain([0, 10]).range([height, margin.top])
    svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y))
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('font-size', width * 0.03)

    // Bars
    svg
      .append('g')
      .attr('fill', '#009FB7')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d[1]))
      .attr('height', (d) => y(0) - y(d[1]))
      .attr('width', x.bandwidth())

    // Axis Labels
    svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', width / 2)
      .attr('y', height + height * 0.2)
      .text('Users')
      .style('font-size', width * 0.04)

    svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', margin.right - margin.right * 0.45)
      .attr('x', -height / 2)
      .style('font-size', width * 0.04)
      .text('Scores')
  }, [ReferenceD3, data, names])

  return (
    <>
      <div className='ReferenceD3'>
        <svg ref={ReferenceD3}></svg>
      </div>
    </>
  )
}
export default Graph
