using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
  public class Order
  {
    public long OrderId { get; set; }
    public long VisitId { get; set; }
    public DateTime Date {get; set;}
    public string OrderType { get; set; }
    public string Notes{ get; set; }
  }
}
